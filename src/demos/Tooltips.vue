<template>
  <div>
    <div class="section">
      <div class="row">
        <h1>Tooltips</h1>
        <pre>
          <code>
Import { Tooltip } from 'streamlabs-beaker';

directives: {
  Tooltip
}

&lt;div v-tooltip="'A tooltip for an image'"&gt;
  &lt;img src="https://thumbs.gfycat.com/PleasedIcyCod-size_restricted.gif"&gt;
&lt;/div&gt;

@import "./../styles/directives/Tooltips.less";
          </code>
        </pre>
      </div>
    </div>
    <div class="section">
      <div class="row">
        <h2>Information</h2>
        <p>
          Tooltip will work on most beaker components that dont have
          <code>overflow: hidden</code> set. If the HTML element is not a beaker component the tooltip will default to the elements parent. Smaller HTML elements
          <code>&lt;i&gt;, &lt;img&gt;</code>, etc. should have the directive placed in it's own parent. This particular directive was designed to be used within pre-made beaker components, but should work elsewhere too. Try to work this into a component, rather than on the site itself.
        </p>
      </div>
    </div>
    <div class="section">
      <h1>Beaker Components</h1>

      <!-- Accordions -->
      <div class="row">
        <h2>Accordions</h2>
        <Accordion
          :opened-title="'Close Accordion'"
          :closed-title="'Open Accordion'"
          v-tooltip="'Dont use a tooltip on an accordion, this is just an example'"
        >
          <div slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </Accordion>
      </div>

      <!-- Sliders -->
      <div class="row">
        <h2>Slider</h2>
        <slider
          :value="value"
          @input="value => updateValue(value)"
          :max="100"
          :min="1"
          :interval="1"
          :tooltip="'always'"
          :suffix="'%'"
          v-tooltip="'Adjust Volume'"
        />
      </div>

      <!-- Badges -->
      <div class="row">
        <h2>Badges</h2>
        <Badge
          :variant="warning"
          :align-left="true"
          v-tooltip="'Why would you want a tooltip here?'"
        >Warn</Badge>
      </div>

      <!-- Dropdowns -->
      <div class="row">
        <h2>Dropdowns</h2>
        <pane-dropdown v-tooltip="'A tooltip on a dropdown? WHY?'">
          <template slot="title">Trending</template>
          <a href="#">Add</a>
          <a href="#">Update</a>
          <a href="#">Remove</a>
        </pane-dropdown>
      </div>

      <!-- Toggles -->
      <div class="row">
        <toggle
          :values="{'show': `<i class='icon-view'></i>`,'hide': `<i class='icon-hide'></i>`}"
          v-model="selectedOption"
          v-tooltip="'A toggle? WTF'"
        ></toggle>
      </div>
    </div>

    <!-- Regular Elements -->
    <div class="section">
      <!-- Upper HTML Elements -->
      <div class="row">
        <h1>Regular Elements</h1>
        <p>Regular elements will need a bit more help</p>
        <h2>HTML Elements</h2>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
              <code>
&lt;div class="any_old_container"&gt;
  &lt;div v-tooltip="'A short sentence.'"&gt;&lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </Accordion>
        <div>
          <div
            v-tooltip="'This is a tooltip'"
            class="tooltip-sample"
            style="width: 300px;"
          >Regular HTML Elements, &lt;div&gt;, &lt;p&gt;, etc.</div>
        </div>
      </div>

      <!-- Lower HTML Elements -->
      <div class="row">
        <h2>&lt;i&gt; &amp; &lt;img&gt; etc</h2>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
              <code>
&lt;div class="any_old_container"&gt;
  &lt;div v-tooltip="'A Tooltip Message'"&gt;
    &lt;i class="icon-question"&gt;&lt;/i&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </Accordion>
        <div>
          <div v-tooltip="'for i type, it must be in parent'" style="width: 14px;">
            <i class="icon-question"></i>
          </div>
        </div>
        <div style="height:32px;"></div>
        <div>
          <div
            style="width: 50px; height: 50px;"
            v-tooltip="'tooltip for images must be in parent'"
          >
            <img src="https://thumbs.gfycat.com/PleasedIcyCod-size_restricted.gif">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Tooltip from "./../directives/Tooltip";
import Button from "./../components/Button.vue";
import Toggle from "./../components/Toggle.vue";
import Slider from "./../components/Slider.vue";
import Badge from "./../components/Badge.vue";
import Accordion from "./../components/Accordion.vue";
import PaneDropdown from "./../components/PaneDropdown.vue";

@Component({
  components: {
    Accordion,
    Badge,
    Slider,
    Toggle,
    Button,
    PaneDropdown
  },
  directives: {
    Tooltip
  }
})
export default class Callouts extends Vue {
  @Prop()
  value: any;

  @Prop()
  warning: any;

  cookieCalloutClosed() {
    console.log("cookie callout closed");
  }
  updateValue(value) {
    // na
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";
@import "./../styles/directives/Tooltips.less";

.tooltip-sample {
  .padding();
  .radius();
  background-color: #00000045;
}
</style>

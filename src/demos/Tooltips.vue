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

&lt;div v-tooltip="'A short message'"&gt;
          </code>
        </pre>
      </div>
    </div>

    <div class="row">
      <h2>Accordions</h2>
      <Accordion
        :opened-title="'Close Accordion'"
        :closed-title="'Open Accordion'"
        v-tooltip="'gg'"
      >
        <div slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </Accordion>
    </div>

    <div class="row">
      <h2>Images</h2>
      <div style="width: 50px; height: 50px;" v-tooltip="'in images must be in parent container'">
        <img src="https://thumbs.gfycat.com/PleasedIcyCod-size_restricted.gif">
      </div>
    </div>

    <div class="section">
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

      <div class="row">
        <h2>Badges</h2>

        <Badge :variant="warning" :align-left="true" v-tooltip="'A Tooltip for a Badge? nope.'">Warn</Badge>
      </div>

      <!-- <div class="row">
        <h1>Regular Elements</h1>
        <div>
          <h2>div</h2>
          <div
            v-tooltip="'Just a div'"
            class="tooltip-sample"
            style="width: 150px;"
          >A regular &lt;div&gt;</div>
        </div>

        <div>
          <h2>p</h2>
          <div v-tooltip="'Just a p'">
            <p class="tooltip-sample" style="width: 250px;">A regular &lt;p&gt;</p>
          </div>
        </div>
        <div>
          <h2>i</h2>
          <div v-tooltip="'for i type, it must be in parent'" style="width: 14px;">
            <i class="icon-question"></i>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Tooltip from "./../directives/Tooltip";

import Button from "./../components/Button.vue";
import Toggle from "./../components/Toggle.vue";
import Slider from "./../components/Slider.vue";
import ProgressBar from "./../components/ProgressBar.vue";
import Badge from "./../components/Badge.vue";
import Accordion from "./../components/Accordion.vue";

@Component({
  components: {
    Accordion,
    Badge,
    ProgressBar,
    Slider,
    Toggle,
    Button
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
    //
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
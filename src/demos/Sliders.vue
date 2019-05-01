<template>
  <div>
    <div class="section">
      <h1>Sliders</h1>
      <h2>Default Slider</h2>
      <p>
        Our slider component is extended from
        <a
          target="_blank"
          href="https://github.com/NightCatSama/vue-slider-component"
          >Vue Slider Component</a
        >
      </p>
      <pre><code>import { Slider } from 'streamlabs-beaker';

components: {
  Slider
}</code></pre>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;slider
  @input=&quot;updateValue(value)&quot;
  :data=&quot;data&quot;
  :min=&quot;0&quot;
  :max=&quot;100&quot;
  :interval=&quot;1&quot;
  :value=&quot;value&quot;
  :suffix=&quot;'%'&quot;
  :tooltip=&quot;'always'&quot;
  ref=&quot;slider'&quot;
&lt;/slider&gt;</code></pre>
        </div>
      </accordion>

      <div class="row section">
        <slider
          @input="valueupdateValue(value)"
          :data="data"
          :min="0"
          :max="100"
          :interval="1"
          v-model="value"
          :suffix="'%'"
          :tooltip="'always'"
          ref="slider"
        ></slider>
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
            <td>data</td>
            <td>Array</td>
            <td>undefined</td>
            <td>Custom data</td>
          </tr>
           <tr>
            <td>dataVisible</td>
            <td>Boolean</td>
            <td>false</td>
            <td>It displays marks and hide tooltip if true</td>
          </tr>
          <tr>
            <td>value</td>
            <td>Number, String, Array</td>
            <td>1</td>
            <td>Initial value of the slider</td>
          </tr>
          <tr>
            <td>prefix</td>
            <td>String</td>
            <td>""</td>
            <td>
              Prefix label that will be displayed next to the value in the
              tooltip
            </td>
          </tr>
          <tr>
            <td>suffix</td>
            <td>String</td>
            <td>px</td>
            <td>
              Suffix label that will be displayed next to the value in the
              tooltip
            </td>
          </tr>
          <tr>
            <td>tooltip</td>
            <td>String</td>
            <td>always</td>
            <td>
              Show the tooltip or not. Options are
              <code>none</code>,
              <code>always</code> or
              <code>focus</code>
            </td>
          </tr>
          <tr>
            <td>min</td>
            <td>Number</td>
            <td>null</td>
            <td>The minimum numerical value that can be selected</td>
          </tr>
          <tr>
            <td>max</td>
            <td>Number</td>
            <td>null</td>
            <td>The maximum numerical value that can be selected</td>
          </tr>
          <tr>
            <td>interval</td>
            <td>Number</td>
            <td>1</td>
            <td>The steps between the values</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>null</td>
            <td>Whether to disable the slider</td>
          </tr>
          <tr>
            <td>width</td>
            <td>Number, String</td>
            <td>auto</td>
            <td>The width of the component</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Slider from "./../components/Slider.vue";
import Accordion from "./../components/Accordion.vue";

@Component({
  components: {
    Slider,
    Accordion
  }
})
export default class Sliders extends Vue {
  value = 50;
  data = [1, 50, 100];

  mounted() {
    console.log(this.$refs);
  }

  updateValue(value) {
    console.log("value is " , value);
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";
.section {
  .margin-v-sides(9);
}
</style>


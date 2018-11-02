<template>
  <div>
    <div class="section">
      <h2>Default Slider</h2>
      <p>Our slider component is extended from <a target="_blank" href="https://github.com/NightCatSama/vue-slider-component">Vue Slider Component</a>
      </p>
      <accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;slider
  :min=&quot;0&quot;
  :max=&quot;100&quot;
  :interval=&quot;5&quot;
  :value=&quot;50&quot;&gt;
&lt;/slider&gt;</code></pre>
        </div>
      </accordion>
      <slider
        :min="0"
        :max="100"
        :interval="5"
        :value="50">
      </slider>
      <table>
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
            <td>max</td>
            <td>number</td>
            <td>null</td>
            <td>The maximum numerical value that can be selected</td>
          </tr>
          <tr>
            <td>min</td>
            <td>number</td>
            <td>null</td>
            <td>The minimum numerical value that can be selected</td>
          </tr>
          <tr>
            <td>interval</td>
            <td>number</td>
            <td>1</td>
            <td>The steps between the values</td>
          </tr>
          <tr>
            <td>value</td>
            <td>Number, String, Array, Object</td>
            <td>1</td>
            <td>Initial value</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Slider from "./../Slider.vue";
import Accordion from "./../Accordion.vue";

@Component({
  components: {
    Slider,
    Accordion
  }
})
export default class Sliders extends Vue {}
</script>

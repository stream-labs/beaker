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
        >Vue Slider Component</a>
      </p>
      <pre><code>import { Slider } from 'streamlabs-beaker';

components: {
  Slider
}</code></pre>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;slider
  :min=&quot;0&quot;
  :max=&quot;100&quot;
  :interval=&quot;1&quot;
  :value=&quot;50&quot;&gt;
&lt;/slider&gt;</code></pre>
        </div>
      </accordion>

      <div class="row">
        <slider :min="0" :max="100" :interval="1" v-model="value" :suffix="'%'" :tooltip="'always'"></slider>
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
            <td>interval</td>
            <td>Number</td>
            <td>1</td>
            <td>The steps between the values</td>
          </tr>
          <tr>
            <td>max</td>
            <td>Number</td>
            <td>null</td>
            <td>The maximum numerical value that can be selected</td>
          </tr>
          <tr>
            <td>min</td>
            <td>Number</td>
            <td>null</td>
            <td>The minimum numerical value that can be selected</td>
          </tr>
          <tr>
            <td>suffix</td>
            <td>String</td>
            <td>px</td>
            <td>Suffix label that will be displayed next to the value in the tooltip</td>
          </tr>
          <tr>
            <td>tooltip</td>
            <td>String</td>
            <td>always</td>
            <td>Show the tooltip or not. Options are 'always' or 'false'</td>
          </tr>
          <tr>
            <td>value</td>
            <td>Number, String, Array, Object</td>
            <td>1</td>
            <td>Initial value of the slider.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Slider from './../components/Slider.vue'
import Accordion from './../components/Accordion.vue'

@Component({
  components: {
    Slider,
    Accordion,
  },
})
export default class Sliders extends Vue {
  value = 50
}
</script>

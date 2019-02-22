<template>
  <div>
    <div class="section">
      <h1>Color Picker</h1>
      <p>This color picker uses a chrome style picker</p>
    </div>
    <div class="section">
      <h2>Default Color Picker</h2>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;color-picker
  :defaultColor=&quot;'#31c3a2'&quot;&gt;
&lt;/color-picker&gt;
          </code></pre>
        </div>
      </accordion>
      <div class="row">
        <color-picker></color-picker>
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
            <td>defaultColor</td>
            <td>String</td>
            <td>#31c3a2</td>
            <td>Color to show up on a fresh color picker</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Accordion from './../components/Accordion.vue'
import ColorPicker from './../components/ColorPicker.vue'

@Component({
  components: {
    Accordion,
    ColorPicker,
  },
})
export default class ColorPickers extends Vue {
  msg = 'hi'!
}
</script>

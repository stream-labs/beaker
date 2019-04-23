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
          <pre><code>&lt;color-picker :v-model=&quot;color&quot;&gt;&lt;/color-picker&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <color-picker v-model="color" :placeholder="'test'"></color-picker>
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
            <td>value</td>
            <td>String</td>
            <td>#31c3a2</td>
            <td>Color to show up on a fresh color picker</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>String</td>
            <td>null</td>
            <td>It shows as a placeholder in case of blank</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import ColorPicker from "./../components/ColorPicker.vue";

@Component({
  components: {
    Accordion,
    ColorPicker
  }
})
export default class ColorPickers extends Vue {
  color = "#ccc";
}
</script>

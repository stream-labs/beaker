<template>
  <div>
    <div class="section">
      <h1>Image Picker</h1>
      <p>A basic image picker</p>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;image-picker&gt;&lt;/image-picker&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <image-picker/>
      </div>
      <!--
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
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </tbody>
      </table>
      -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImagePicker from './../components/ImagePicker.vue'
import Accordion from './../components/Accordion.vue'
@Component({
  components: {
    ImagePicker,
    Accordion,
  },
})
export default class ImagePickers extends Vue {
  msg = 'Hi!'
}
</script>

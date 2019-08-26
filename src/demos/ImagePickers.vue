<template>
  <div>
    <div class="section">
      <h1>Media Pickers</h1>

      <h2>Media Picker</h2>
      <p>Media file picker</p>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;image-picker&gt;&lt;/image-picker&gt;</code></pre>
        </div>
      </accordion>
      <media-picker
        variation="image"
        :media-link="true"
        @select-media="log"
        @zoom-media="zoomMedia"
        @remove-media="removeMedia"
        v-model="media"
      />
    </div>

    <div class="section">
      <h2>Image Picker</h2>
      <p>A basic image picker</p>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;image-picker&gt;&lt;/image-picker&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <image-picker />
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
import { Component, Vue } from "vue-property-decorator";
import ImagePicker from "./../components/ImagePicker.vue";
import Accordion from "./../components/Accordion.vue";
@Component({
  components: {
    ImagePicker,
    Accordion
  }
})
export default class ImagePickers extends Vue {
  msg = "Hi!";
  media = "";

  log() {
    this.media = "https://uploads1.twitchalerts.com/000/045/005/127/foolofsoul-design-1521842129-0.png";
    // this.media = "https://cdn1.twitchalerts.com/twitch-bits/sounds/bits.ogg";
  }

  removeMedia() {
    this.media = "";
  }

  zoomMedia() {
    window.open(this.media);
  }
}
</script>

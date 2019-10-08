<template>
  <div>
    <div class="section">
      <h1>Media Pickers</h1>

      <h2>Media Picker</h2>
      <pre><code>import { MediaPicker } from 'streamlabs-beaker';

components: {
  MediaPicker
}</code></pre>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;media-picker&gt;
  variation=&quot;image&quot;
  :media-link=&quot;true&quot;
  @select-media=&quot;log&quot;
  @zoom-media=&quot;zoomMedia&quot;
  @remove-media=&quot;removeMedia&quot;
  v-model=&quot;media&quot;
&lt;/media-picker&gt;</code></pre>
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
      <!-- <h2>Image Picker</h2>
      <p>A basic image picker</p>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;image-picker&gt;&lt;/image-picker&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <image-picker />
      </div> -->

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
            <td>variation</td>
            <td>string</td>
            <td>null</td>
            <td>
              Available variations include `image` and `audio`. Video is under
              the `image` variation.
            </td>
          </tr>
          <tr>
            <td>mediaLink</td>
            <td>boolean</td>
            <td>false</td>
            <td>
              Will display a clickable link icon that emits `link-media` event.
              Primarily used on SL core to add a link to a media href.
            </td>
          </tr>
          <tr>
            <td>value</td>
            <td>string</td>
            <td>null</td>
            <td>A URL string to the selected media.</td>
          </tr>
          <tr>
            <td>link-media</td>
            <td>event</td>
            <td>null</td>
            <td>Event emitted when the link icon is clicked</td>
          </tr>
          <tr>
            <td>zoom-media</td>
            <td>event</td>
            <td>null</td>
            <td>Event emitted when the magnifiy glass icon is clicked</td>
          </tr>
          <tr>
            <td>play-media</td>
            <td>event</td>
            <td>null</td>
            <td>Event emitted when the play icon is clicked</td>
          </tr>
          <tr>
            <td>remove-media</td>
            <td>event</td>
            <td>null</td>
            <td>
              Event emitted when the close icon or 'Remove' button is clicked
            </td>
          </tr>
          <tr>
            <td>select-media</td>
            <td>event</td>
            <td>null</td>
            <td>
              Event emitted when the plus icon or 'Select Media' button is
              clicked
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MediaPicker from "./../components/MediaPicker.vue";
// import ImagePicker from "./../components/ImagePicker.vue";
import Accordion from "./../components/Accordion.vue";
@Component({
  components: {
    MediaPicker,
    // ImagePicker,
    Accordion
  }
})
export default class ImagePickers extends Vue {
  msg = "Hi!";
  media = "";

  log() {
    this.media =
      "https://uploads.twitchalerts.com/000/045/005/127/foolofsoul-design-1521842129-0.png";
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

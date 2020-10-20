<template>
  <div>
    <div class="section">
      <h1>Media Pickers</h1>

      <pre><code>import { MediaPicker } from 'streamlabs-beaker';

components: {
  MediaPicker
}</code></pre>
    </div>

    <div class="section">
      <DemoSection
        title="Default"
        :code="demoCode"
      >
        <template #components>
          <form-group>
            <template #input>
              <media-picker
                v-model="imageMedia"
                variation="image"
                :media-link="true"
                @select-media="selectImageMedia"
                @preview-media="previewImageMedia"
                @remove-media="removeImageMedia"
              />

              <media-picker
                v-model="audioMedia"
                variation="audio"
                :media-link="true"
                @select-media="selectAudioMedia"
                @remove-media="removeAudioMedia"
              />
            </template>
          </form-group>
        </template>
      </DemoSection>
    </div>

    <div class="section">
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
            <td>preview-media</td>
            <td>event</td>
            <td>null</td>
            <td>
              Event emitted when the magnifiy glass or play icons are clicked
            </td>
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
import { defineComponent, ref } from 'vue';

import FormGroup from '../components/FormGroup.vue';
import MediaPicker from '../components/MediaPicker.vue';
import MediaPickersCode from '!!raw-loader!./MediaPickers';
import DemoSection from '../components/DemoSection.vue';

export default defineComponent({
  components: {
    DemoSection,
    FormGroup,
    MediaPicker,
  },

  setup() {
    const demoCode: string = MediaPickersCode;
    const msg = ref(50);
    const audioMedia = ref('');
    const imageMedia = ref('');

    function selectImageMedia() {
      imageMedia.value = 'https://uploads.twitchalerts.com/000/045/005/127/foolofsoul-design-1521842129-0.png';
    }

    function selectAudioMedia() {
      audioMedia.value = 'https://cdn1.twitchalerts.com/twitch-bits/sounds/bits.ogg';
    }

    function removeImageMedia() {
      imageMedia.value = '';
    }

<<<<<<< HEAD
    function removeAudioMedia() {
      audioMedia.value = '';
    }

    function previewImageMedia() {
      window.open(imageMedia.value);
    }

    return {
      demoCode,
      msg,
      audioMedia,
      imageMedia,
      selectImageMedia,
      selectAudioMedia,
      removeImageMedia,
      removeAudioMedia,
      previewImageMedia,
    };
  },
});
=======
  previewImageMedia() {
    console.log("Previewing Media");
    window.open(this.imageMedia);
  }
}
>>>>>>> a7a6790c6cbb7e7e472be867d8f90c9d015435ba
</script>

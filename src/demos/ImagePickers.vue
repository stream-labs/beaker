<template>
  <div class="section">
    <h2>Image Picker</h2>
<image-picker></image-picker>


  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import ImagePicker from "./../components/ImagePicker.vue";


@Component({
  components: {
    Accordion,
    ImagePicker
  }
})
export default class ImagePickers extends Vue {

}





</script>
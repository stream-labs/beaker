<template>
  <div class="section">
    <h2>Color Picker</h2>
    <color-picker/>
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
export default class ColorPickers extends Vue {}
</script>
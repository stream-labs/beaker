<template>
  <div class="section">
    <h1>Color Picker</h1>
    <color-picker v-model="colors"></color-picker>
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
  colors = {
    hex: "#31c3a2",
    hsl: { h: 166, s: 0.6, l: 0.48, a: 1 },
    rgba: { r: 49, g: 195, b: 162, a: 1 },
    a: 1
  };
}
</script>

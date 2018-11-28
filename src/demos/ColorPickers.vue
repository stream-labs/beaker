<template>
  <div class="section">
    <h2>Color Picker</h2>
    <color-picker name="colors" :value="colors" v-model="colors"></color-picker>
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
    hex: "#194d33",
    hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
    hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
    rgba: { r: 25, g: 77, b: 51, a: 1 },
    a: 1
  };
}
</script>

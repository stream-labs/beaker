<template>
  <div class="section">
    <h1>Color Picker</h1>
    <color-picker :defaultColor="defaultColor"></color-picker>
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
  defaultColor = "#31c3a2";
}
</script>

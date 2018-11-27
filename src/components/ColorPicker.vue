<template>
  <color-picker v-model="colors">
  </color-picker>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueColor from "vue-color";

export default {
  name: "ColorPicker",
  extends: VueColor.Sketch,

  components: {
    ColorPicker: VueColor.Sketch
  },

  data() {
    return {
      colors: "#194d33"
    };
  },

  props: {
    suffix: {
      type: String,
      default: "px"
    }
  }
};
</script>

<style lang="less">
@import "./../styles/Imports";
</style>

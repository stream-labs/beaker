<template>
  <sketch-picker v-model="colors">
  </sketch-picker>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { Sketch } from "vue-color";
// const Sketch = require({ Sketch } from "vue-color");


export default {
  name: "ColorPicker",
  // extends: Sketch,

  components: {
    // "sketch-picker": Sketch
  },

  data() {
    return {
      colors: "#194d33"
    }
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

<template>
  <div>
    <input type="text" placeholder="Text Input" />
    <input type="number" placeholder="12" />
    <input type="email" placeholder="morgan@streamlabs.com" />
    <textarea rows="3"></textarea>
    <selector></selector>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Selector from "./../Selector.vue";

@Component({
  components: {
    Selector
  }
})
export default class Inputs extends Vue {}
</script>

<style lang="less">
@import "./../../styles/Base";
</style>

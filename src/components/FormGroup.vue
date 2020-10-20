<template>
  <div class="s-form-group">
    <slot name="input" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    helpText: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    tooltip: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-form-group {
  .margin-bottom(3);
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 16px;
}
</style>

<template>
  <div class="s-onboarding-step">
    <h1>
      <slot name="title" />
    </h1>
    <p>
      <slot name="desc" />
    </p>
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";
.s-onboarding-step {
  .margin-top(4);
}
</style>

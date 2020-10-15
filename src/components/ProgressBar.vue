<template>
  <div class="s-progress">
    <div
      class="s-progress-bar"
      :style="getProgress"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    progressComplete: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    const getProgress = computed(() => `width:${props.progressComplete}%`);
    return { getProgress };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";
.s-progress {
  display: inline-block;
  height: 8px;
  width: 100%;
  background-color: @light-3;
  border-radius: 100px;
}
.s-progress-bar {
  display: block;
  height: 100%;
  left: 0;
  top: 0;
  background-color: @teal;
  border-radius: 100px;
}
.night,
.night-theme {
  .s-progress {
    background-color: @dark-4;
  }
}
</style>

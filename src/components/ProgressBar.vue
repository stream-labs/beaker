<template>
  <div class="s-progress">
    <div class="s-progress-bar" :style="getProgress"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class ProgressBar extends Vue {
  @Prop()
  progressComplete!: Number;
  get getProgress() {
    return "width:" + this.progressComplete + "%";
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";
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

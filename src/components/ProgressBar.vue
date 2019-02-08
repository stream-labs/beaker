<template>
  <div class="progress">
    <div class="progress-bar" :style="getProgress"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class Progressbar extends Vue {
  @Prop()
  progressComplete!: Number;
  get getProgress() {
    return 'width:' + this.progressComplete + '%';
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";
.progress {
  display: inline-block;
  height: 8px;
  width: 100%;
  background-color: @light-3;
  border-radius: 100px;
}
.progress-bar {
  display: block;
  height: 100%;
  left: 0;
  top: 0;
  background-color: @teal;
  border-radius: 100px;
}
.night,
.night-theme {
  .progress {
    background-color: @dark-4;
  }
}
</style>

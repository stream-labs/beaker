<template>
  <div class="badge badge--progress">
    <div
      :style="{
        'background-image': `linear-gradient(to right, ${ barColor ? barColor : '#31c3a2' } ${ parseInt(100 * current / total) }%, rgba(0,0,0,0) 0%)`,
        'color': textColor ? textColor : '#fff'
      }">
      {{ `${current}${separator ? separator : '/'}${total} ${suffix}` }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class ProgressBadge extends Vue {
  /*
    barColor: STRING - pass in color name, rgba or hex code to set the color of the progress bar. Default is #31c3a2 (teal)
    textColor: STRING - pass in color name, rgba or hex code to set the color of the bar text. Default is #fff (white)
    current: INTEGER or FLOAT - indicates where the current progress should be. e.g. 5 in '5 out of 10.'
    total: INTEGER or FLOAT - indicates what the maximum/completion value is. e.g. 10 in '5 out of 10.'
    separator: STRING - whatever you want to separate the current and total e.g. 'out of' in '5 out of 10.' Could be '/', 'of', etc. Default is '/'
    suffix: STRING - whatever you want to include at the end of the progress string. e.g. 'sold' in '5 out of 10 sold.'
  */
  @Prop()
  barColor!: string;

  @Prop()
  textColor!: string;

  @Prop()
  current!: number;

  @Prop()
  total!: number;

  @Prop()
  separator!: string;

  @Prop()
  suffix!: string;
}
</script>

<style lang="less">
@import "./../styles/Imports";

.badge--progress {
  .padding(0);
  height: 18px !important;
  line-height: 18px !important;
  border: none;
  background-color: @light-4;

  > div {
    .radius();
    padding: 0 4px;
    height: 18px;
    line-height: 18px;
  }
}

.night,
.night-theme {
  .badge--progress {
    background-color: @dark-5;
  }
}
</style>

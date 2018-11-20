<template>
  <div
    class="badge"
    :class="badgeClasses">
    <div
      v-if="variant === 'progress'"
      :style="{
        'background-image': `linear-gradient(
          to right,
          ${ barColor } ${ parseInt(100 * current / total) }%,
          rgba(0,0,0,0) 0%
        )`,
        'color': textColor
      }">
      {{ `${current}${separator}${total} ${suffix}` }}
    </div>
    <slot v-else/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Badge extends Vue {
  /*
    barColor: STRING - pass in color name, rgba or hex code to set the color of the progress bar. Default is #31c3a2 (teal)
    textColor: STRING - pass in color name, rgba or hex code to set the color of the bar text. Default is #fff (white)
    current: INTEGER or FLOAT - indicates where the current progress should be. e.g. 5 in '5 out of 10.'
    total: INTEGER or FLOAT - indicates what the maximum/completion value is. e.g. 10 in '5 out of 10.'
    separator: STRING - whatever you want to separate the current and total e.g. 'out of' in '5 out of 10.' Could be '/', 'of', etc. Default is '/'
    suffix: STRING - whatever you want to include at the end of the progress string. e.g. 'sold' in '5 out of 10 sold.'
  */
  @Prop({ default: "success" })
  variant!: string;

  @Prop({ default: false })
  alignLeft!: boolean;

  @Prop({ default: false })
  noMargin!: boolean;

  @Prop({ default: "#31c3a2" })
  barColor!: string;

  @Prop({ default: "#ffffff" })
  textColor!: string;

  @Prop()
  current!: number;

  @Prop()
  total!: number;

  @Prop({ default: "/" })
  separator!: string;

  @Prop()
  suffix!: string;

  get badgeClasses() {
    let classes = [];

    classes.push(`badge--${this.variant}`);

    if (this.alignLeft) {
      classes.push(`badge--left`);
    }

    if (this.noMargin) {
      classes.push("badge--no-margin");
    }

    return classes;
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

// Standout labels, used for 'New', 'Beta', 'Pro', etc
.badge {
  display: inline-block;
  margin: 0 0 0 8px;
  padding: 0 4px;
  border: 1px solid transparent;
  .radius();
  font-size: 13px;
  .weight(@medium);
  text-transform: capitalize;
  color: @white;
  vertical-align: text-bottom;
  line-height: 16px;

  &--left {
    margin: 0 8px 0 0;
  }

  &--no-margin {
    margin: 0;
  }

  &--success {
    background-color: @teal-semi;
    color: @teal;
  }

  &--new {
    background-color: @purple-semi;
    color: @purple;
  }

  &--tag {
    background-color: fade(@day-paragraph, 8%);
    color: @day-paragraph;
  }

  &--pro {
    background-color: @light-5;
  }

  &--beta {
    background-color: @yellow-light;
    color: @yellow-dark;
  }

  &--warning {
    background-color: @red-semi;
    color: @warning;
  }

  &--count {
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 10px;
  }

  &--progress {
    height: 18px;
    .padding(0);
    border: none;
    line-height: 18px;
    background-color: @light-4;

    > div {
      height: 18px;
      padding: 0 4px;
      .radius();
      line-height: 18px;
    }
  }
}

.night,
.night-theme {
  .badge {
    &--tag {
      background-color: @dark-5;
      color: @white;
    }

    &--beta {
      background-color: @info-dark;
      color: @white;
    }

    &--teal {
      background-color: @teal;
      color: @white;
    }

    &--new {
      background-color: @purple;
      color: @white;
    }

    &--warning {
      background-color: @red;
      color: @white;
    }

    &--success {
      background-color: @teal;
      color: @white;
    }

    &--progress {
      background-color: @dark-5;
    }
  }
}
</style>

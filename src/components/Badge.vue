<template>
  <div class="s-badge" :class="badgeClasses" :style="badgeStyles">
    <div
      v-if="variant === 'progress'"
      :style="{
        'background-image': `linear-gradient(
          to right,
          ${ backgroundColor } ${ parseInt(100 * current / total) }%,
          rgba(0,0,0,0) 0%
        )`,
        'color': textColor
      }"
    >{{ `${current}${separator}${total} ${suffix}` }}</div>
    <slot v-else/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Badge extends Vue {
  /*
    backgroundColor: STRING - pass in color name, rgba or hex code to set the color of the progress bar. Default is #31c3a2 (teal)
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

  @Prop()
  backgroundColor!: string;

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

  @Prop()
  small!: Boolean;

  badgeProRewrite: any = {
    background: this.backgroundColor,
    color: this.textColor
  };

  get badgeStyles() {
    const styles: any = [];

    if (this.backgroundColor) {
      styles.push(this.badgeProRewrite);
    }

    return styles;
  }

  get badgeClasses() {
    const classes: any = [];

    classes.push(`s-badge--${this.variant}`);

    if (this.alignLeft) {
      classes.push(`s-badge--left`);
    }

    if (this.noMargin) {
      classes.push("s-badge--no-margin");
    }

    if (this.small) {
      classes.push("s-badge--small");
    }

    return classes;
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

// Standout labels, used for 'New', 'Beta', 'Pro', etc
.s-badge {
  display: inline-block;
  margin: 0 0 0 8px;
  padding: 0 5px;
  .radius();
  font-size: 14px;
  .weight(@medium);
  color: @white;
  vertical-align: text-bottom;
  line-height: 24px;
  box-sizing: border-box;

  &--left {
    margin: 0 8px 0 0;
  }

  &--no-margin {
    margin: 0;
  }

  &--small {
    line-height: 16px;
    font-size: 12px;
  }

  &--new,
  &--success {
    background-color: @teal-semi;
    color: @teal;
  }

  &--new-alt {
    background-color: transparent;
    color: @teal;
  }

  &--tag {
    background-color: fade(@day-paragraph, 8%);
    color: @day-paragraph;
  }

  &--pro {
    background-color: @light-5;
  }

  &--beta {
    background-color: @yellow-semi;
    color: @yellow;
  }

  &--warning {
    background-color: @red-semi;
    color: @warning;
  }

  &--count {
    padding: 1px 4px 0;
    border-radius: 16px;
    font-size: 10px;
    line-height: 14px;
    .weight(@medium);
    background-color: @red;
    .margin(0);
  }

  &--mod {
    color: @yellow;
    background-color: @white;
    .margin-h-sides();
  }

  &--progress {
    height: 18px;
    .padding(0);
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
  .s-badge {
    &--tag {
      background-color: @dark-5;
      color: @white;
    }

    &--beta {
      background-color: @info;
      color: @white;
    }

    &--success,
    &--new {
      background-color: @teal;
      color: @white;
    }

    &--warning {
      background-color: @red;
      color: @white;
    }

    &--mod {
      background-color: @dark-3;
    }

    &--progress {
      background-color: @dark-5;
    }
  }
}
</style>

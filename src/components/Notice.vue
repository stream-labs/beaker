<template>
  <div class="s-notice" :class="`s-bg-${bgColor}`">
    <div class="s-notice__wrapper">
      <div class="s-notice__icon-bg" :class="`s-bg-image__${bgColor}`"></div>
      <div class="s-notice__body">
        <div class="s-notice__icon">
          <i class="s-icon" :class="`icon-${icon}`"></i>
        </div>
        <div class="s-notice__detail">
          <h2 class="s-notice__title" :class="`s-notice__title--${titleColor}`">{{title}}</h2>
          <p class="s-notice__desc">{{desc}}</p>
        </div>
      </div>
      <div class="s-notice__button">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Notice extends Vue {
  @Prop({ default: "default" })
  bgColor!: {
    type: string;
    required: true;
  };

  @Prop()
  bgIcon!: {
    type: string;
    required: true;
  };

  @Prop()
  title!: {
    type: string;
    required: true;
  };

  @Prop()
  titleColor!: {
    type: string;
    required: true;
  };

  @Prop()
  desc!: {
    type: string;
    required: true;
  };

  @Prop()
  icon!: {
    type: string;
    required: true;
  };
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-notice {
  .margin-bottom(3);
  overflow: hidden;
}

.s-notice__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .padding(3);
  .max-width();
  position: relative;
}

.s-notice__icon-bg {
  position: absolute;
  left: 0;
  width: 140px;
  height: 140px;
}

.s-notice__body {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.s-notice__detail {
  .padding-h-sides(2);
  .s-notice__title--warning {
    color: @warning;
  }
}

p {
  .margin-bottom(0);
  .margin-top(2);
}

.s-bg-default {
  background: @light-2;
}

.s-bg-warning {
  background: @notice-bg-warning;
}

.s-bg-image__default,
.s-bg-image__warning {
  opacity: 0.04;
}

.s-bg-image__default {
  background: url("../assets/imgs/information-icon.svg") no-repeat;
  background-position: center left;
  background-size: contain;
}

.s-bg-image__warning {
  background: url("../assets/imgs/error-icon.svg") no-repeat;
  background-position: center left;
  background-size: contain;
}

.icon-information {
  color: @light-5;
}

.icon-error {
  color: @warning;
}

.night,
.night-theme {
  .s-bg-default {
    background: @dark-4;
  }
}
</style>

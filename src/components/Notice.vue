<template>
  <div class="notice" :class="`bg-${bgColor}`">
    <div class="notice__wrapper">
      <div class="notice__icon-bg" :class="`bg-image__${bgColor}`"></div>
      <div class="notice__body">
        <div class="notice__icon">
          <i class="icon" :class="`icon-${icon}`"></i>
        </div>
        <div class="notice__detail">
          <h2 class="notice__title" :class="`notice__title--${titleColor}`">{{title}}</h2>
          <p class="notice__desc">{{desc}}</p>
        </div>
      </div>
      <div class="notice__button">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Notice extends Vue {
  @Prop()
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

.notice {
  .margin-bottom(3);
  overflow: hidden;
}

.notice__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .padding(3);
  .max-width();
  position: relative;
}

.notice__icon-bg {
  position: absolute;
  left: 0;
  width: 140px;
  height: 140px;
}

.notice__body {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.notice__detail {
  .padding-h-sides(2);
  .notice__title--warning {
    color: @warning;
  }
}

p {
  .margin-bottom(0);
  .margin-top(2);
}

.bg-default {
  background: @light-2;
}

.bg-warning {
  background: @notice-bg-warning;
}

.bg-image__default,
.bg-image__warning {
  opacity: 0.04;
}

.bg-image__default {
  background: url("../assets/imgs/information-icon.svg") no-repeat;
  background-position: center left;
  background-size: contain;
}

.bg-image__warning {
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
  .bg-default {
    background: @dark-4;
  }
}
</style>

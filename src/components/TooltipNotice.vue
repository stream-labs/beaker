<template>
  <div class="s-tooltip-notice" :style="{ width: width + 'px' }">
    <div class="s-tooltip-notice-content">
      <i
        :class="arrowClasses"
        class="icon-dropdown s-tooltip-notice__arrow"
      ></i>
      <h3>{{ title }}</h3>
      <p>{{ desc }}</p>
      <Button
        v-if="hasButton"
        @click="clickHandler"
        :title="buttonTitle"
        :variation="'action'"
        :size="'small'"
      ></Button>

      <Button
        class="s-tooltip-notice__secondary-action"
        v-if="hasSecondaryAction"
        @click="secondaryClickHandler"
        :title="secondaryActionTitle"
        :variation="'link'"
        :size="'small'"
      ></Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./Button.vue";

@Component({
  components: {
    Button
  }
})
export default class TooltipNotice extends Vue {
  @Prop({ required: true })
  title!: string;

  @Prop({ default: "Got it" })
  buttonTitle!: string;

  @Prop({ default: "Learn More" })
  secondaryActionTitle!: string;

  @Prop({ required: true })
  desc!: string;

  @Prop({ default: "left" })
  arrowPosition!: string;

  @Prop({ default: true })
  hasButton!: boolean;

  @Prop({ default: false })
  hasSecondaryAction!: boolean;

  @Prop({ default: 200 })
  width!: number;

  clickHandler() {
    this.$emit("handle-tooltip");
  }

  secondaryClickHandler() {
    this.$emit("handle-tooltip-secondary");
  }

  get arrowClasses() {
    let classes: string[] = [];

    if (this.arrowPosition) {
      classes.push(`s-tooltip-notice__arrow--${this.arrowPosition}`);
    }

    return classes;
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-tooltip-notice {
  .day-shadow();
  background-color: @white;
  .padding(2);
  width: 200px;
  .radius();
  z-index: 100;
  position: absolute;

  .s-button {
    .margin-top(2);
  }

  p {
    .margin-bottom(0);
  }

  h3 {
    font-size: 16px;
    .margin-bottom();
    .weight(@medium);
    color: @day-title;
  }
}

.s-tooltip-notice-content {
  position: relative;
}

.s-tooltip-notice__arrow {
  transform: rotate(90deg);
  font-size: 40px;
  position: absolute;
  top: 8px;
  left: -36px;
  color: @white;
}

.s-tooltip-notice__arrow--top {
  top: -38px;
  left: 126px;
  transform: rotate(180deg);
}

.s-tooltip-notice__arrow--bottom {
  top: 8px;
  left: -36px;
  transform: rotate(0deg);
}

.s-tooltip-notice__arrow--right {
  top: 8px;
  left: -36px;
  transform: rotate(-90deg);
}

.s-tooltip-notice__secondary-action {
  .margin-left(2);
}

.night,
.night-theme {
  .s-tooltip-notice {
    background-color: @night-section-alt;

    h3 {
      color: @night-title;
    }
  }

  .s-tooltip-notice__arrow {
    color: @night-section-alt;
  }
}
</style>

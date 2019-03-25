<template>
  <transition name="callout-remove">
    <div v-if="!closed">
      <div class="s-callout" :class="[ calloutClass, calloutClosedClass ]">
        <i v-if="icon" :class="[calloutIcon]"></i>
        <span>
          <slot/>
        </span>
        <i v-if="closeable" class="s-icon-close s-callout__close-button" @click="closeCallout()"></i>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Callout extends Vue {
  @Prop({ default: "success" })
  variation!: string;

  @Prop()
  icon!: String;

  @Prop({ default: false })
  closeable!: boolean;

  closed: boolean = false;
  calloutClosedClass: string = "";

  closeCallout() {
    this.closed = true;
    // this.calloutClosedClass = "callout--closed";
  }

  get calloutClass() {
    return `s-callout--${this.variation}`;
  }

  get calloutIcon() {
    switch (this.variation) {
      case "success":
      case "success-alt":
        return "s-icon-check";
      case "warning":
      case "warning-alt":
        return "s-icon-delete";
      case "info":
        return "s-icon-information";
    }
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.callout-remove-enter-active {
  .transition();
}

.callout-remove-leave-active {
  height: 20px;
  .transition();
}

.callout-remove-enter,
.callout-remove-leave-to {
  height: 0;
  padding: 0;
  margin: 0;
  opacity: 0;
}
</style>


<style lang="less" scoped>
@import "./../styles/Imports";

.s-callout {
  position: relative;
  display: flex;
  align-items: center;
  .margin-bottom(3);
  .padding();
  height: 40px;
  .radius();
  .transition();
  justify-content: center;

  [class^="s-icon-"] {
    &:first-child {
      .margin-right();
    }
  }

  a {
    color: inherit;
  }

  &__close-button {
    position: absolute;
    top: 13px;
    right: 8px;
    color: inherit;
    opacity: 0.6;
    .transition();
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  &.strong {
    color: @white;
  }

  &--success {
    background-color: @teal-semi;
    color: @teal;
  }

  &--warning {
    background-color: @red-semi;
    color: @red;
  }

  &--info {
    background-color: @yellow-dark-semi;
    color: @info-dark;
  }

  &--success.strong {
    background-color: @teal;
  }

  &--info.strong {
    background-color: @info-dark;
  }

  &--warning.strong {
    background-color: @warning;
  }

  // &.callout--closed {
  //   height: 0;
  //   margin: 0;
  //   padding: 0;
  //   opacity: 0;
  // }
}
</style>

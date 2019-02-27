<template>
  <div
    v-if="!closed"
    class="callout"
    :class="[ calloutClass, calloutClosedClass ]"
    @transitionend.self="closed = true"
  >
    <i v-if="icon" :class="[calloutIcon]"></i>
    <span>
      <slot/>
    </span>
    <i v-if="closeable" class="icon-close callout__close-button" @click="closeCallout()"></i>
  </div>
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
    this.calloutClosedClass = "callout--closed";
  }

  get calloutClass() {
    return `callout--${this.variation}`;
  }

  get calloutIcon() {
    switch (this.variation) {
      case "success":
      case "success-alt":
        return "icon-check";
      case "warning":
      case "warning-alt":
        return "icon-delete";
      case "info":
        return "icon-information";
    }
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.callout {
  position: relative;
  display: flex;
  align-items: center;
  .margin-bottom(3);
  .padding();
  height: 40px;
  .radius();
  .transition();
  justify-content: center;

  [class^="icon-"] {
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

  &.callout--closed {
    height: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
  }
}
</style>

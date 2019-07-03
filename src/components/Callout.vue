<template>
  <div
    v-if="!closed"
    class="s-callout"
    :class="[calloutClass, calloutClosedClass]"
  >
    <span>
      <i v-if="icon" :class="[calloutIcon]"></i>
      <span>
        <slot />
      </span>
      <i
        v-if="closeable"
        class="icon-close s-callout__close-button"
        @click="closeCallout()"
      ></i>
    </span>
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

  @Prop()
  onClose!: Function;

  closed: boolean = false;
  calloutClosedClass: string = "";

  closeCallout() {
    this.calloutClosedClass = "callout--closed";
    setTimeout(() => {
      typeof this.onClose === "function" && this.onClose();
    }, 275);
  }

  get calloutClass() {
    return `s-callout--${this.variation}`;
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
      case "cookies":
        return "icon-information";
    }
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-callout {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .margin-bottom(3);
  .padding-h-sides(2);
  .radius();
  line-height: 40px;
  .transition();

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
    top: 12px;
    right: 16px;
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
    background-color: @yellow-semi;
    color: @info;
  }

  &--success.strong {
    background-color: @teal;
  }

  &--info.strong {
    background-color: @info;
  }

  &--warning.strong {
    background-color: @warning;
  }

  &.callout--closed {
    line-height: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
    transform: translateY(-15px);
  }

  &--cookies {
    background-color: @dark-5;
    color: @white;
    justify-content: flex-start;
    min-height: 48px;
    line-height: 130%;
    z-index: 100;
    margin: 0 auto;
    position: fixed;
    bottom: 0;
    right: calc(~"0% + 9px");
    left: 0%;
    .radius(0);
    .padding-top();
    .padding-bottom();

    > span {
      max-width: 1120px;
      width: 100%;
      display: grid;
      grid-template-columns: 16px 1fr 16px;
      align-items: center;
      grid-gap: 8px;
      margin: 0 auto;
    }

    a {
      text-decoration: none;
    }

    .s-callout__close-button {
      position: relative;
      top: 0;
      right: 0;
    }
  }
}

.night,
.night-theme {
  .s-callout {
    a {
      color: inherit;
    }
  }
}
</style>

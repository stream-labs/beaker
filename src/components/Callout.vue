<template>
  <div
    class="callout"
    :class="[ calloutClass ]">
    <i
      v-if="icon"
      :class="[calloutIcon]"></i>
    <slot/>
    <i v-if="closeable" class="fas fa-times callout__close"></i>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Callout extends Vue {
  @Prop({ default: "success" })
  variation!: string;

  @Prop({ default: true })
  icon!: boolean;

  @Prop({ default: false })
  closeable!: boolean;

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
  .margin-bottom(3);
  .padding();
  border: none;
  .radius();

  a {
    font-weight: normal;
    text-decoration: underline;
    color: inherit;
  }

  [class^="icon-"] {
    font-size: 18px;
    vertical-align: text-bottom;
    margin-right: 6px;
  }

  .callout__close {
    font-size: 12px;
    color: inherit;
    top: 12px;
    right: 10px;
    opacity: .5;
    position: absolute;
    .transition();
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .inline-button {
    .weight(@medium);
    margin-left: 0;
    text-decoration: none;
  }

  .button {
    margin-top: 10px;
  }

  .close-button {
    opacity: .6;
    .transition();

    &:hover {
      opacity: 1;
    }
  }
}

.callout--success {
  background: @teal;
  color: @white;

  a,
  .button--default {
    color: @white;
  }
}

.callout--success-alt {
  background: rgba(50, 195, 162, 0.16);
  color: @teal;
}

.callout--warning {
  background: @warning;
  color: @white;
}

.callout--warning-alt {
  color: @warning;
  background: @red-semi;
}

.callout--info {
  background: #FEF9E7;
  color: #C49E34;

  a {
    color: #C49E34;
  }
}
</style>

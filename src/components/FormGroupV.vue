<template>
  <div class="s-form-group-v">
    <!-- title -->
    <div
      :style="titleLayoutStyle"
      class="s-form-group-v__title"
      :class="{ 's-form-group-v__title--hidden': !title && !tooltip }"
    >
      <label v-if="title">{{ title }}</label>
      <i
        v-if="tooltip"
        v-tooltip.auto="tooltip"
        class="tooltip icon-question"
      ></i>
      <slot name="header"></slot>
    </div>

    <div class="s-form-group-v__input-wrapper">
      <slot name="input"></slot>

      <div class="s-form-group-v__help-text" v-if="helpText">
        {{ helpText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class FormGroupV extends Vue {
  @Prop()
  helpText!: string;

  @Prop()
  title!: string;

  @Prop({ default: "" })
  tooltip!: string;

  @Prop({ default: "space-between" })
  titleLayout!: string;

  get titleLayoutStyle() {
    return {
      "justify-content": this.titleLayout
    };
  }
}
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-form-group-v {
  .margin-bottom(2);

  .s-tooltip {
    .margin-left();
  }
}

.s-form-group-v__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .margin-bottom();
  font-size: 12px;

  &--hidden {
    margin-bottom: 0;
  }

  label {
    .margin-right();
  }
}

.s-form-group-v__input-wrapper {
  grid-column: col-start / span 12;
}

.s-form-group-v__help-text {
  color: @label;
  font-size: 13px;
  .margin-top();
}
</style>

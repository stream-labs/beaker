<template>
  <div class="s-form-group-v">
    <!-- title -->
    <div class="s-form-group-v__title">
      <label>{{ title }}</label>
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

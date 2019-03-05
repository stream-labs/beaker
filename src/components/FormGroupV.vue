<template>
  <div class="s-form-group-v">
    <!-- title -->
    <div class="s-form-group-v__title">
      <label>{{ title }}</label>
      <i v-if="tooltip" class="s-tooltip s-icon-question" v-tooltip="tooltip"/>
    </div>

    <div class="s-form-group-v__input-wrapper">
      <slot name="input"></slot>

      <div class="s-form-group-v__help-text" v-if="helpText">{{ helpText }}</div>
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
  tooltip!: string;

  @Prop()
  title!: string;
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-form-group-v {
  .margin-bottom(2);
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-column-gap: 16px;
  grid-row-gap: @spacing;
}

.s-form-group-v__title {
  grid-column: col-start / span 12;
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

<template>
  <div class="s-form-group">
    <slot name="input"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class FormGroup extends Vue {
  @Prop()
  helpText!: string

  @Prop()
  tooltip!: string

  @Prop()
  title!: string
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';

.s-form-group {
  .margin-bottom(3);
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 16px;
}
</style>

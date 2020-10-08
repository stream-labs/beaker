<template>
  <div class="s-form-group">
    <slot name="input" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { defineComponent } from 'vue';

@Component({})
export default defineComponent({
  @Prop()
  helpText!: string;

  @Prop()
  tooltip!: string;

  @Prop()
  title!: string;
})
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-form-group {
  .margin-bottom(3);
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 16px;
}
</style>

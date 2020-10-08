<template>
  <div class="s-item-grid">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { defineComponent } from 'vue';

@Component({})
export default defineComponent({
  @Prop()
  items!: Object[];
})
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-item-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 16px;
}
</style>

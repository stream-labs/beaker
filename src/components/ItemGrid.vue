<template>
  <div class="item-grid">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class ItemGrid extends Vue {
@Prop()
items!: Object[]
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.item-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 16px;
}

</style>

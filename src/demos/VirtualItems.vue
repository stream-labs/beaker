<template>
  <div>
    <div class="section">
      <h1>Face Masks</h1>
      <p>UI for face masks items and grid.</p>
      <ItemGrid>
        <VirtualItem :preview="preview" :rarity="rarity" :name="name" :selectionCount="selectionCount"></VirtualItem>
      </ItemGrid>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import VirtualItem from "./../components/VirtualItem.vue";
import ItemGrid from "./../components/ItemGrid.vue";

@Component({
  components: {
    Accordion,
    VirtualItem,
    ItemGrid
  }
})
export default class Callouts extends Vue {
  preview = "https://streamlabs.com/imgs/facemasks/robot-mask.png";
  name = "Robot";
  rarity = "Common";
  selectionCount = "2";
}
</script>

<style lang="less" scoped>
</style>

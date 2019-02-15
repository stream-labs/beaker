<template>
  <div>
    <div class="section">
      <h1>Face Masks</h1>
      <p>UI for face masks items and grid.</p>
      <ItemGrid>
        <FaceMaskItem :preview="preview" :rarity="rarity" :name="name" :selectionCount="selectionCount"></FaceMaskItem>
      </ItemGrid>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import FaceMaskItem from "./../components/FaceMaskItem.vue";
import ItemGrid from "./../components/ItemGrid.vue";

@Component({
  components: {
    Accordion,
    FaceMaskItem,
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

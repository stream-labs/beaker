<template>
  <div>
    <div class="section">
      <h1>Face Masks</h1>
      <p>UI for face masks items and grid.</p>

      <div class="section container">
        <VirtualItem
          :preview="'https://streamlabs.com/imgs/facemasks/robot-mask.png'"
          :rarity="'Enter Giveaway'"
          :name="'4x VIP Tickets to PAX, TwitchCon and SXSW'"
          :remainingTime="'2h left'"
          :hasWarning="true"
        ></VirtualItem>

        <VirtualItem
          :preview="'https://streamlabs.com/imgs/facemasks/robot-mask.png'"
          :rarity="'Entered'"
          :name="'$5K Custom High-Spec Streaming Desktop PC'"
          :remainingTime="'5d left'"
          :isGiveaway="true"
        ></VirtualItem>
      </div>

      <ItemGrid>
        <VirtualItem
          v-for="(mask, id) in masks"
          :key="id"
          :preview="mask.preview"
          :rarity="mask.rarity"
          :name="mask.name"
          :selectionCount="mask.selectionCount"
          :selected="mask.selected"
          @click="clickEvent"
        ></VirtualItem>
      </ItemGrid>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VirtualItem from "./../components/VirtualItem.vue";
import ItemGrid from "./../components/ItemGrid.vue";

@Component({
  components: {
    VirtualItem,
    ItemGrid
  }
})
export default class VirtualItems extends Vue {
  masks = [
    {
      preview: "https://streamlabs.com/imgs/facemasks/robot-mask.png",
      name: "Robot",
      rarity: "Common",
      selectionCount: "1",
      selected: true
    },
    {
      preview: "https://streamlabs.com/imgs/facemasks/robot-mask.png",
      name: "Robot",
      rarity: "Common",
      selectionCount: "2",
      selected: true
    },
    {
      preview: "https://streamlabs.com/imgs/facemasks/robot-mask.png",
      name: "Robot",
      rarity: "Common",
      selectionCount: "3",
      selected: true
    },
    {
      preview: "https://streamlabs.com/imgs/facemasks/robot-mask.png",
      name: "Robot",
      rarity: "Common"
    },
    {
      preview: "https://streamlabs.com/imgs/facemasks/robot-mask.png",
      name: "Robot",
      rarity: "Common"
    },
    {
      preview: "https://streamlabs.com/imgs/facemasks/robot-mask.png",
      name: "Robot",
      rarity: "Common"
    },
    {
      preview: "https://streamlabs.com/imgs/facemasks/robot-mask.png",
      name: "Robot",
      rarity: "Common"
    },
    {
      preview: "https://streamlabs.com/imgs/facemasks/robot-mask.png",
      name: "Robot",
      rarity: "Common"
    }
  ];

  clickEvent() {
    console.log("Hey you clicked me!");
  }
}
</script>

<style lang="less" scoped>
.container {
  display: grid;
  grid-template-columns: 240px 1fr;
}
</style>

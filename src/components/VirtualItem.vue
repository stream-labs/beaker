<template>
  <div
    class="virtual-item"
    :class="[ virtualItemClasses ]"
    :rarity="rarity"
    :selected="selected"
    :quantity="quantity">
    <span v-if="selectionCount" class="virtual-item__selection-count">{{ selectionCount }}</span>
    <span v-if="type" class="virtual-item__label">{{ type }}</span>
    <span v-if="quantity" class="virtual-item__label">{{ quantity }}</span>
    <img :src="preview" />
    <h4>{{ name }}</h4>
    <span>{{ rarity }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class VitualItem extends Vue {
  @Prop()
  name!: String;

  @Prop()
  preview!: String;

  @Prop()
  quantity!: Number;

  @Prop()
  rarity!: String;

  @Prop({ default: false })
  selected!: Boolean;

  @Prop()
  selectionCount!: String;

  @Prop()
  type!: String;

  get virtualItemClasses() {
    let classes = []
    return `virtual-item--${this.rarity}`;
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.virtual-item {
  background-color: @day-section;
  position: relative;
  display: grid;
  justify-content: center;
  text-align: center;
  .padding(2);
  .radius(2);
  .transition();
  min-width: 120px;
  max-width: 200px;
}

.virtual-item__selection-count {
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  background-color: @dark-2;
  color: @white;
  .small-type();
  .weight(@medium);
  .radius(4);
  width: 16px;
  height: 16px;
  .flex-centered();
}

.night,
.night-theme {
  .virtual-item {
    background-color: @day-section;
    position: relative;
    display: grid;
    justify-content: center;
    text-align: center;
    .padding(2);
    .radius(2);
    .transition();
    min-width: 120px;
    max-width: 200px;
  }
}

</style>

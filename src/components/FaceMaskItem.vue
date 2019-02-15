<template>
  <div
    class="face-mask-item"
    :class="[ rarityClass ]">
    <span v-if="selectionCount" class="face-mask-item__selection-count">{{ selectionCount }}</span>
    <img :src="preview" />
    <h4>{{ name }}</h4>
    <span>{{ rarity }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class FaceMaskItem extends Vue {
  @Prop({ default: "success" })
  variation!: string;

  @Prop()
  name!: String;

  @Prop()
  selectionCount!: String;

  @Prop()
  preview!: String;

  @Prop()
  rarity!: String;

  get rarityClass() {
    return `face-mask-item--${this.rarity}`;
  }

  get calloutIcon() {
    switch (this.variation) {
      case "success":
      case "success-alt":
        return "icon-check";
      case "warning":
      case "warning-alt":
        return "icon-delete";
      case "info":
        return "icon-information";
    }
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.face-mask-item {
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

  &--success {
    background-color: @teal;
    color: @white;
  }

  &--success-alt {
    background-color: fade(@teal, 16%);
    color: @teal;
  }

  &--warning {
    background-color: @warning;
    color: @white;
  }

  &--warning-alt {
    background-color: fade(@warning, 8%);
    color: @warning;
  }

  &--info {
    background-color: @info-light;
    color: @info-dark;
  }

  &.callout--closed {
    height: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
  }
}

.face-mask-item__selection-count {
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

  &:hover {
    opacity: 1;
  }
}

</style>

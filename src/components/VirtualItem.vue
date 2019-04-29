<template>
  <div
    class="s-virtual-item"
    :class="[ virtualItemClasses ]"
    :rarity="rarity"
    :selected="selected"
    :quantity="quantity"
    :value="value"
    @click="$emit('click')"
  >
    <span v-if="selectionCount" class="s-virtual-item__selection-count">{{ selectionCount }}</span>
    <span v-if="type" class="s-virtual-item__label">{{ type }}</span>
    <span v-if="quantity" class="s-virtual-item__label">{{ quantity }}</span>
    <div class="s-virtual-item__img">
      <img :src="preview">
    </div>
    <h3 class="s-virtual-item__name">{{ name }}</h3>
    <span class="s-virtual-item__rarity">{{ rarity }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class VitualItem extends Vue {
  @Prop()
  name!: String;

  @Prop()
  value!: String;

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
    const classes: any = [];

    if (this.rarity) {
      classes.push(`s-virtual-item--${this.rarity}`);
    }

    if (this.selected) {
      classes.push("is-selected");
    }

    return classes.join(" ");
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-virtual-item {
  background-color: @day-section;
  position: relative;
  display: grid;
  justify-content: center;
  text-align: center;
  .padding(2);
  .radius(2);
  .transition();
  min-width: 160px;
  max-width: 220px;

  &.is-selected {
    background-color: @selected;
    .s-virtual-item__name {
      color: @white;
    }

    .s-virtual-item__rarity {
      color: @night-paragraph;
    }
  }

  &:hover {
    cursor: pointer;
  }
}

.s-virtual-item__name {
  .weight(@medium);
  font-size: 16px;
  .margin-bottom(0);
}

.s-virtual-item__rarity {
  .margin-top();
}

.s-virtual-item__selection-count {
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  background-color: @white;
  color: @dark-2;
  .small-type();
  .weight(@medium);
  .radius(4);
  width: 16px;
  height: 16px;
  .flex-centered();
}

.s-virtual-item__img {
  .margin-bottom(2);
  width: 96px;
}

.night,
.night-theme {
  .s-virtual-item {
    background-color: @night-section-alt;

    &.is-selected {
      background-color: @selected;
    }
  }
}
</style>

<template>
  <div
    class="virtual-item"
    :class="[ virtualItemClasses ]"
    :rarity="rarity"
    :selected="selected"
    :quantity="quantity"
    :value="value"
    @click="emitInput(value)">
    <span v-if="selectionCount" class="virtual-item__selection-count">{{ selectionCount }}</span>
    <span v-if="type" class="virtual-item__label">{{ type }}</span>
    <span v-if="quantity" class="virtual-item__label">{{ quantity }}</span>
    <div class="virtual-item__img"><img :src="preview" /></div>
    <h3 class="virtual-item__name">{{ name }}</h3>
    <span class="virtual-item__rarity">{{ rarity }}</span>
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

  emitInput(val: string) {
    this.$emit("input", val);
  }

  get virtualItemClasses() {
    let classes = []

    if (this.rarity) {
      classes.push(`virtual-item--${this.rarity}`);
    }

    if (this.selected) {
      classes.push('is-selected');
    }

    return classes.join(" ");
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
  min-width: 160px;
  max-width: 220px;

  &.is-selected {
    background-color: @selected;
  }
}

.virtual-item__name {
  .margin-bottom();
  .weight(@medium);
  font-size: 16px;
}

.is-selected {
  .virtual-item__name {
    color: @white;
  }

  .virtual-item__rarity {
    color: @night-paragraph;
  }
}

.virtual-item__selection-count {
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

.virtual-item__img {
  .margin-bottom(2);
}

.night,
.night-theme {
  .virtual-item {
    background-color: @night-section-alt;

    &.is-selected {
      background-color: @selected;
    }
  }
}

</style>

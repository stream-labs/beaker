<template>
<div class="image-picker-input">
  <div
    :value="option.value"
    :title="option.title"
    :image="option.image"
    v-for="option in options"
    :key="option.value"
    class="image-picker-input__option"
    :class="[value === option.value ? 'active' : '']"
    @click="emitInput(option.value)">
    <img :src="option.image">
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface IOption {
  value: string;
  title: string;
  image: string;
}

@Component({})
export default class ImagePickerInput extends Vue {
  @Prop({ default: "above" })
  value!: string;

  @Prop({
    default: () => [
      {
        value: "above",
        title: "Above",
        image: "https://cdn.streamlabs.com/layouts/img/above.png"
      },
      {
        value: "banner",
        title: "Banner",
        image: "https://cdn.streamlabs.com/layouts/img/banner.png"
      },
      {
        value: "side",
        title: "Side",
        image: "https://cdn.streamlabs.com/layouts/img/side.png"
      }
    ]
  })
  options!: Array<IOption>;

  emitInput(val: string) {
    this.$emit("input", val);
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.image-picker-input {
  width: 100%;
  max-width: 370px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 64px);
  grid-gap: 8px;
}

.image-picker-input__option {
  width: 64px;
  height: 64px;
  border: 1px solid @day-solid-input;
  background-color: @day-solid-input;
  .transition();
  position: relative;
  .radius();
  cursor: pointer;

  img {
    height: 48px;
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.active {
    background-color: @dark-2;
    border-color: @dark-2;
  }
}

.night-theme {
  .image-picker-input__option {
    border-color: @night-border;
    background-color: @night-solid-input;

    &.active {
      background-color: @dark-2;
      border-color: @dark-2;
    }
  }
}
</style>

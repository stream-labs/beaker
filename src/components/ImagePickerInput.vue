<template>
  <div class="s-image-picker-input">
    <div
      :value="option.value"
      :title="option.title"
      :image="option.image"
      v-for="option in options"
      :key="option.value"
      class="s-image-picker-input__option"
      :class="[value === option.value ? 'active' : '']"
      :style="{ width: width, height: height }"
      @click="emitInput(option.value)"
    >
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

  @Prop(String)
  width!: string;

  @Prop(String)
  height!: string;
  
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

<style lang="less">
@import "./../styles/Imports";

.s-image-picker-input {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.s-image-picker-input__option {
  margin: 0 8px 8px 0;
  width: 64px;
  height: 64px;
  border: 1px solid @day-solid-input;
  background-color: @day-solid-input;
  .transition();
  position: relative;
  .radius();
  cursor: pointer;

  img {
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 80%;
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

.night,
.night-theme {
  .s-image-picker-input__option {
    border-color: @night-border;
    background-color: @night-solid-input;

    &.active {
      background-color: @dark-2;
      border-color: @dark-2;
    }
  }
}
</style>

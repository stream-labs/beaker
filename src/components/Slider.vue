<template>
  <vue-slider-component
    :width="width"
    :height="8"
    :dotHeight="16"
    :dotWidth="24"
    :tooltip="tooltip"
    :tooltipPlacement="'bottom'"
    :min="min"
    :max="max"
    :interval="interval"
    v-model="displayValue"
    :prefix="prefix"
    :suffix="suffix"
    :tooltipFormatter="prefix + '{value}' + suffix"
    @callback="value => emitInput(value)"
    :disabled="disabled"
    :data="data"
    :marks="displayMarks"
    class="s-slider"
  ></vue-slider-component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueSliderComponent from "vue-slider-component";

@Component({
  components: {
    VueSliderComponent
  }
})
export default class Slider extends Vue {
  @Prop({ default: null })
  data!: Array<number> | Array<string>;

  @Prop({ default: 1 })
  value!: number | string | Array<number> | Array<string>;

  @Prop({ default: "" })
  prefix!: String;

  @Prop({ default: "" })
  suffix!: String;

  @Prop({ default: "focus" })
  tooltip!: "none" | "always" | "focus";

  @Prop()
  min!: number;

  @Prop()
  max!: number;

  @Prop()
  interval!: number;

  @Prop()
  disabled!: boolean;

  @Prop()
  width!: number | string;

  displayValue: number | string | Array<number> | Array<string> = this.value;

  get displayMarks() {
    return this.data ? true : false;
  }

  created() {
    this.$on("input", this.setValue);
  }

  destroyed() {
    this.$off("input", this.setValue);
  }

  emitInput(val) {
    this.$emit("input", val);
  }

  setValue(val) {
    this.value = val;
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-slider {
  flex: 1;
  width: 100%;

  .vue-slider-rail {
    background-color: @light-3;
    .radius(3);
  }

  .vue-slider-process {
    background-color: @teal;
    .radius(3);
  }

  .vue-slider-dot {
    .vue-slider-dot-handle {
      background-color: @dark-2;
      box-shadow: none;
      .radius(3);
      position: relative;
      width: 24px;
      height: 16px;
      left: -6px;
      &:before,
      &:after {
        border: none;
        font-family: "icomoon";
        font-weight: 900;
        position: absolute;
        top: 0px;
        color: @light-3;
        font-size: 11px;
        line-height: 15px;
        content: "\e996";
        display: inline-block;
      }

      &:before {
        transform: rotate(90deg);
        left: 2px;
      }

      &:after {
        transform: rotate(-90deg);
        right: 2px;
      }
    }
  }

  .vue-slider-tooltip {
    background-color: transparent;
    border: 0;
    color: @day-title;
    padding: 0;

    &:before {
      border: 0 !important;
    }
  }
}

.night,
.night-theme {
  .vue-slider {
    .vue-slider-rail {
      background-color: @dark-5;
    }

    .vue-slider-dot {
      .vue-slider-dot-handle {
        background-color: @light-1;

        &:before,
        &:after {
          color: @dark-5;
        }
      }
    }

    .vue-slider-tooltip {
      color: @night-title;
    }
  }
}
</style>

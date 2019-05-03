<template>
  <vue-slider-component
    class="s-slider"
    :width="width"
    :height="8"
    :dotHeight="16"
    :dotWidth="24"
    :tooltip="tooltip"
    :tooltip-dir="'bottom'"
    :min="min"
    :max="max"
    :interval="interval"
    :value="displayValue"
    :prefix="prefix"
    :suffix="suffix"
    :formatter="prefix + '{value}' + suffix"
    :data="data"
    @callback="value => emitInput(value)"
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
  @Prop()
  width!: number | string;

  @Prop({ default: 1 })
  value!: number | string | Array<number> | Array<string>;

  @Prop({ default: 0 })
  min!: number;

  @Prop({ default: 100 })
  max!: number;

  @Prop({ default: 1 })
  interval!: number;

  @Prop({ default: "always" })
  tooltip!: "always" | false;

  @Prop({ default: "" })
  prefix!: string;

  @Prop({ default: "" })
  suffix!: string;

  @Prop()
  data!: Array<number> | Array<string>;

  displayValue: number | string | Array<number> | Array<string> = this.value;

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
    this.displayValue = val;
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";
.s-slider {
  width: 100%;
  flex: 1;

  .vue-slider {
    background-color: @light-3;
  }

  .vue-slider-process {
    background-color: @teal;
  }

  .vue-slider-dot {
    .vue-slider-dot-handle {
      background-color: @dark-2;
      box-shadow: none;
      .radius(3);
      position: relative;

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
  .vue-slider-component {
    .vue-slider {
      background-color: @dark-4;
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

<template>
  <vue-slider-component
    :width="width"
    :height="8"
    :dotHeight="16"
    :dotWidth="24"
    :tooltip="tooltip"
    :tooltip-dir="'bottom'"
    :min="min"
    :max="max"
    :interval="interval"
    :value="value"
    :prefix="prefix"
    :suffix="suffix"
    :formatter="prefix + '{value}' + suffix"
    :data="data"
    @callback="value => emitInput(value)"
  ></vue-slider-component>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import VueSliderComponent from "vue-slider-component";
export default {
  name: "Slider",
  extends: VueSliderComponent,
  components: {
    VueSliderComponent
  },
  props: {
    width: {
      type: Number | String,
    },
    value: {
      type: [String, Number],
      defualt: 0
    },
    prefix: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: null
    }
  },
  created() {
    this.$on("input", this.setValue);
  },
  destroyed() {
    this.$off("input", this.setValue);
  },
  methods: {
    emitInput(val) {
      this.$emit("input", val);
    },
    setValue(val) {
      this.currentValue = val;
    }
  }
};
</script>

<style lang="less">
@import "./../styles/Imports";
.vue-slider-component {
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
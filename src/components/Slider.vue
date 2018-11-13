<template>
  <vue-slider-component
    :height="8"
    :dotHeight="16"
    :dotWidth="24"
    :tooltip="false"
    :min="min"
    :max="max"
    :interval="interval"
    :value="value">
  </vue-slider-component>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const VueSliderComponent = require("vue-slider-component");

export default {
  name: "Slider",
  extends: VueSliderComponent,

  components: {
    VueSliderComponent
  }
};
</script>

<style lang="less">
@import "./../styles/Imports";

.vue-slider-component {
  padding: 5px 12px !important;

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
  }
}
</style>

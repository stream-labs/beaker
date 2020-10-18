<template>
  <vue-slider-component
    ref="slider"
    class="s-slider"
    :class="{
      's-slider--simple': simpleTheme,
      's-slider--has-tooltip': tooltip === 'always'
    }"
    :width="width"
    :height="8"
    :dot-height="16"
    :dot-width="24"
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
    :disabled="disabled"
    :simple-theme="simpleTheme"
    @callback="value => emitInput(value)"
  />
</template>

<script lang="ts">
import mitt from 'mitt';
import {
  defineComponent, ref, onMounted, onBeforeUnmount, onUnmounted, PropType, watchEffect,
} from 'vue';
import VueSliderComponent from 'vue-slider-component';
import ResizeObserver from 'resize-observer-polyfill';

export default defineComponent({
  components: {
    VueSliderComponent,
  },

  props: {
    width: {
      type: Number || String,
    },

    value: {
      type: Number || String || Array as PropType<number[]> || Array as PropType<string[]>,
      default: () => 1,
    },

    min: {
      type: Number,
      default: () => 0,
    },

    max: {
      type: Number,
      default: () => 100,
    },

    interval: {
      type: Number,
      default: () => 1,
    },

    tooltip: {
      type: String || Boolean,
      default: 'always',
    },

    prefix: {
      type: String,
      default: () => '',
    },

    suffix: {
      type: String,
      default: () => '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    data: {
      type: Array as PropType<number[]> || Array as PropType<string[]>,
    },

    simpleTheme: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const emitter = mitt();
    const slider = ref<any>(null);
    const displayValue = ref(props.value);
    let debounced = false;

    function emitInput(val) {
      emit('input', val);
    }

    function setValue(val) {
      displayValue.value = val;
    }

    function debounce() {
      return new Promise((resolve) => {
        if (!debounced) {
          debounced = true;
          setTimeout(() => {
            debounced = false;
            resolve();
          }, 500);
        }
      });
    }

    emitter.on('input', setValue);

    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const {
          left, top, width, height,
        } = entry.contentRect;
        if (!debounced) {
          debounce().then(() => {
            if (slider.value) {
              slider.value.refresh();
            }
          });
        }
      });
    });

    watchEffect(() => {
      displayValue.value = props.value;
    });

    onMounted(() => {
      if (slider.value) {
        ro.observe(slider.value);
      }
    });

    onBeforeUnmount(() => {
      if (slider.value) {
        ro.unobserve(slider.value);
      }
    });

    onUnmounted(() => {
      emitter.off('input', setValue);
    });

    return {
      slider,
      displayValue,
      emitInput,
      setValue,
      debounce,
    };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";
.s-slider {
  width: 100%;
  flex: 1;
  padding: 4px 0px !important;

  .vue-slider {
    background-color: @light-3;
  }

  .vue-slider-process {
    background-color: @dark-teal;
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

.s-slider--simple {
  .vue-slider-process {
    background-color: @selected;
  }
}

.s-slider--has-tooltip {
  padding: 4px 0px 26px !important;
}

.night,
.night-theme {
  .s-slider {
    .vue-slider {
      background-color: @dark-4;
    }

    .vue-slider-process {
      background-color: @teal;
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

  .s-slider--simple {
    .vue-slider-process {
      background-color: @dark-5;
    }
  }
}
</style>

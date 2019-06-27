<template>
  <vue-slider-component
    class="s-slider"
    :class="{
      's-slider--simple': simpleTheme,
      's-slider--has-tooltip': tooltip === 'always'
    }"
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
    :disabled="disabled"
    @callback="value => emitInput(value)"
    :simpleTheme="simpleTheme"
    ref="slider"
  ></vue-slider-component>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import VueSliderComponent from "vue-slider-component";
import ResizeObserver from "resize-observer-polyfill";

@Component({
  components: {
    VueSliderComponent
  }
})
export default class Slider extends Vue {
  $refs!: {
    slider: any;
  };

  @Watch("value")
  updateLocalValue() {
    this.displayValue = this.value;
    this.$refs.slider.refresh();
  }

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

  @Prop({ default: false })
  disabled!: boolean;

  @Prop()
  data!: Array<number> | Array<string>;

  @Prop({ default: false })
  simpleTheme!: boolean;

  displayValue: number | string | Array<number> | Array<string> = this.value;
  private debounced: boolean = false;
  private ro = new ResizeObserver((entries, observer) => {
    for (let entry of entries) {
      let { left, top, width, height } = entry.contentRect;
      if (!this.debounced) {
        this.debounce().then(() => {
          if (this.$refs.slider) {
            this.$refs.slider.refresh();
          }
        });
      }
    }
  });

  created() {
    this.$on("input", this.setValue);
  }

  mounted() {
    this.ro.observe(this.$refs.slider.$el);
  }

  beforeDestroy() {
    this.ro.unobserve(this.$refs.slider.$el);
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

  debounce() {
    return new Promise(resolve => {
      if (!this.debounced) {
        this.debounced = true;
        setTimeout(() => {
          this.debounced = false;
          resolve();
        }, 500);
      }
    });
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";
.s-slider {
  width: 100%;
  flex: 1;
  padding: 4px 0px !important;

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
